import { useRef } from "react"
import { MeshStandardMaterialProps, useFrame } from '@react-three/fiber';

interface Props {
    color: string;
    position: {
        x: number;
        y: number;
    };
}

export default function Box(props: Props) {
    const meshRef = useRef<any>();

    useFrame(() => {
        meshRef.current.position.x = props.position.x;
        meshRef.current.position.y = props.position.y;
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry />
            <meshStandardMaterial color={props.color} />
        </mesh>
    )
}
