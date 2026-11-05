let videoStream = null;
let currentTryOnProduct = null;
let animationFrameId = null;
let processedGlassesImg = null;
let faceMeshModel = null;

async function openTryOnModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentTryOnProduct = product;
  const modal = document.getElementById("tryon-modal");
  document.getElementById("tryon-title").textContent = product.nombre;
  document.getElementById("tryon-product-price").textContent = `$${(product.precio || product.price).toLocaleString("es-AR")}`;
  document.getElementById("tryon-add-btn").onclick = () => {
    addToCart(product.id);
    closeTryOnModal();
  };

  modal.classList.add("open");
  
  const loadingEl = document.getElementById("tryon-loading");
  if (loadingEl) {
    loadingEl.style.display = "block";
    loadingEl.textContent = "Cargando detector facial y limpiando imagen...";
  }

  // 1. Procesamos la imagen para quitarle el fondo blanco de forma quirúrgica
  const rawImg = new Image();
  rawImg.crossOrigin = "anonymous";
  rawImg.src = currentTryOnProduct.img;

  rawImg.onload = () => {
    processedGlassesImg = removeWhiteBackground(rawImg);
  };

  if (rawImg.complete) {
    processedGlassesImg = removeWhiteBackground(rawImg);
  }

  // 2. Iniciamos la cámara y cargamos el modelo facial
  await initFaceMeshAndCamera();
}

// Función para eliminar totalmente el fondo blanco de la foto de los lentes
function removeWhiteBackground(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Si el píxel es blanco o muy claro, lo volvemos transparente
    if (r > 200 && g > 200 && b > 200) {
      data[i + 3] = 0;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const newImg = new Image();
  newImg.src = canvas.toDataURL();
  return newImg;
}

async function initFaceMeshAndCamera() {
  const video = document.getElementById("tryon-video");
  const canvas = document.getElementById("tryon-canvas");
  const ctx = canvas.getContext("2d");
  const loadingEl = document.getElementById("tryon-loading");

  try {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
    }

    videoStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } }
    });
    video.srcObject = videoStream;
    await video.play();

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    // Cargamos el modelo de detección facial de MediaPipe si no está cargado
    if (!faceMeshModel) {
      if (loadingEl) loadingEl.textContent = "Cargando inteligencia artificial...";
      faceMeshModel = await faceLandmarksDetection.load(
        faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
        { maxFaces: 1 }
      );
    }

    if (loadingEl) loadingEl.style.display = "none";

    async function predictionLoop() {
      if (!videoStream || !document.getElementById("tryon-modal").classList.contains("open")) return;

      if (video.videoWidth && canvas.width !== video.videoWidth) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dibujamos el video en modo espejo
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
      ctx.restore();

      try {
        const faces = await faceMeshModel.estimateFaces({ input: video });

        if (faces && faces.length > 0) {
          const keypoints = faces[0].scaledMesh;

          // Puntos clave de los ojos según MediaPipe FaceMesh
          const leftEye = keypoints[33];   // Ojo izquierdo
          const rightEye = keypoints[263]; // Ojo derecho
          const noseBridge = keypoints[168]; // Puente de la nariz

          if (leftEye && rightEye && noseBridge) {
            // Como el video está espejado, invertimos la coordenada X en el canvas
            const leftX = canvas.width - leftEye[0];
            const leftY = leftEye[1];
            const rightX = canvas.width - rightEye[0];
            const rightY = rightEye[1];

            // Calculamos el ancho entre los ojos para dimensionar los anteojos de forma realista
            const dx = rightX - leftX;
            const dy = rightY - leftY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const glassesWidth = distance * 2.2;
            const glassesHeight = glassesWidth * 0.45;

            // Centro entre ambos ojos ajustado con el puente de la nariz
            const centerX = (leftX + rightX) / 2;
            const centerY = (leftY + rightY) / 2;

            const drawX = centerX - glassesWidth / 2;
            const drawY = centerY - glassesHeight * 0.7;

            // Rotación natural basada en la inclinación de la cabeza
            const angle = Math.atan2(dy, dx);

            if (processedGlassesImg && processedGlassesImg.complete && processedGlassesImg.naturalWidth !== 0) {
              ctx.save();
              ctx.translate(centerX, centerY);
              ctx.rotate(angle);
              ctx.drawImage(
                processedGlassesImg, 
                -glassesWidth / 2, 
                -glassesHeight / 2, 
                glassesWidth, 
                glassesHeight
              );
              ctx.restore();
            }
          }
        }
      } catch (e) {
        console.error("Error en el seguimiento facial:", e);
      }

      animationFrameId = requestAnimationFrame(predictionLoop);
    }

    predictionLoop();

  } catch (err) {
    if (loadingEl) {
      loadingEl.style.display = "block";
      loadingEl.textContent = "No se pudo acceder a la cámara o cargar la IA.";
    }
  }
}

function closeTryOnModal() {
  const modal = document.getElementById("tryon-modal");
  modal.classList.remove("open");

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
  }
}