import { useState, useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, Center } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TailSpin } from "react-loader-spinner";

const Model = ({ model, texture, scale, desiredTileSize }) => {
  const modelRef = useRef();

  const clonedScene = useMemo(() => {
    if (!model || !texture) return null;

    const cloned = model.clone();
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    const repeatX = size.x / desiredTileSize;
    const repeatY = size.y / desiredTileSize;
    texture.repeat.set(repeatX, repeatY);

    cloned.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.9,
          metalness: 0.0,
        });
        child.castShadow = true;
      }
    });

    return cloned;
  }, [model, texture, desiredTileSize]);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0, 0);
      modelRef.current.rotation.set(0, 0, 0);
    }
  }, [model]);

  if (!clonedScene) return null;

  return (
    <Center>
      <primitive ref={modelRef} object={clonedScene} scale={scale} />
    </Center>
  );
};

const FabricModel = ({ imageUrl, modelUrl, scale }) => {
  const [model, setModel] = useState(null);
  const [texture, setTexture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const desiredTileSize =
    modelUrl === "/models/shirt/scene.gltf"
      ? 55
      : modelUrl === "/models/jacket/scene.gltf"
      ? 1
      : 0.2;

  useEffect(() => {
    setIsLoading(true);
    const textureLoader = new THREE.TextureLoader();
    const newTexture = textureLoader.load(imageUrl, () => {
      setTexture(newTexture);
    });

    return () => {
      newTexture.dispose();
    };
  }, [imageUrl]);

  useEffect(() => {
    setIsLoading(true);
    const modelLoader = new GLTFLoader();
    modelLoader.load(modelUrl, (gltf) => {
      setModel(gltf.scene);
    });

    return () => {
      setModel(null);
    };
  }, [modelUrl]);

  useEffect(() => {
    if (model && texture) {
      setIsLoading(false);
    }
  }, [model, texture]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            color: "#000000",
            fontSize: "24px",
            backdropFilter: "blur(5px)",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div className="loaderSpinner">
            <TailSpin
              visible={true}
              height="60"
              width="60"
              color="#000"
              ariaLabel="tail-spin-loading"
              radius="0.1"
              wrapperStyle={{ scale: 0.3 }}
              wrapperClass=""
              style={{ scale: 0.3 }}
            />
          </div>
          Loading...
        </div>
      )}
      <Canvas
        shadows
        camera={{ position: [0, 0.2, 3], fov: 45 }}
        gl={{ antialias: true }}
        onCreated={({ gl, scene }) => {
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          scene.background = new THREE.Color("#ffffff");
        }}
      >
        <color attach="background" args={["#ffffff"]} />

        <ambientLight intensity={1.0} />
        <directionalLight
          position={[2, 5, 3]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[4096, 4096]}
          shadow-radius={4}
        />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[1000, 1000]} />
          <meshStandardMaterial color="#ffffff" roughness={1} metalness={0} />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]}>
          <circleGeometry args={[0.7, 64]} />
          <meshBasicMaterial
            color="#000000"
            transparent
            opacity={0.15}
            depthWrite={false}
          >
            <canvasTexture
              attach="map"
              image={(() => {
                const canvas = document.createElement("canvas");
                canvas.width = 256;
                canvas.height = 256;
                const ctx = canvas.getContext("2d");
                ctx.filter = "blur(12px)";
                const gradient = ctx.createRadialGradient(
                  128,
                  128,
                  0,
                  128,
                  128,
                  128
                );
                gradient.addColorStop(0, "rgba(0,0,0,0.4)");
                gradient.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 256, 256);
                return canvas;
              })()}
            />
          </meshBasicMaterial>
        </mesh>

        {model && texture && (
          <Model
            model={model}
            texture={texture}
            scale={[scale, scale, scale]}
            desiredTileSize={desiredTileSize}
          />
        )}

        <OrbitControls
          enableZoom
          enableRotate
          enablePan={false}
          minDistance={1}
          maxDistance={3}
          target={[0, 0, 0]}
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
};

export default FabricModel;
