import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Octahedron, Box } from '@react-three/drei';
import * as THREE from 'three';

const DNAHelix = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const y = (i - 4) * 0.3;
          return (
            <group key={i} rotation={[0, angle, 0]}>
              <Sphere args={[0.1, 16, 16]} position={[0.5, y, 0]}>
                <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
              </Sphere>
              <Sphere args={[0.1, 16, 16]} position={[-0.5, y, 0]}>
                <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} />
              </Sphere>
            </group>
          );
        })}
      </group>
    </Float>
  );
};

const HeartShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <Octahedron args={[0.8, 0]}>
          <meshStandardMaterial
            color="#ef4444"
            emissive="#ef4444"
            emissiveIntensity={0.3}
            metalness={0.3}
            roughness={0.4}
          />
        </Octahedron>
      </mesh>
    </Float>
  );
};

const MoleculeStructure = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.6}>
      <group ref={groupRef} position={position}>
        <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.4} />
        </Sphere>
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          return (
            <Sphere key={i} args={[0.15, 16, 16]} position={[Math.cos(angle) * 0.8, Math.sin(angle) * 0.8, 0]}>
              <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.3} />
            </Sphere>
          );
        })}
      </group>
    </Float>
  );
};

const MedicalCross = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
      <group position={position}>
        <Box args={[0.3, 1.2, 0.2]}>
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </Box>
        <Box args={[1.2, 0.3, 0.2]}>
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </Box>
      </group>
    </Float>
  );
};

const PillShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <Torus args={[0.5, 0.2, 16, 32]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            metalness={0.5}
            roughness={0.3}
          />
        </Torus>
      </mesh>
    </Float>
  );
};

const FloatingMedicalObjects = () => {
  return (
    <group>
      <DNAHelix position={[-3, 1, -2]} />
      <HeartShape position={[3, -1, -1]} />
      <MoleculeStructure position={[0, 2, -3]} />
      <MedicalCross position={[-2, -2, -2]} />
      <PillShape position={[2, 1.5, -2]} />
    </group>
  );
};

export default FloatingMedicalObjects;
