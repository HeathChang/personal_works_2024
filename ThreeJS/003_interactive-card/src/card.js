import * as THREE from "three";

class Card {
    constructor({width, height, radius, color}) {
        const shape = new THREE.Shape();
        const x = width / 2 - radius;
        const y = height / 2 - radius;

        shape
            .absarc(x, y, radius, Math.PI / 2, 0, true) // 타원모형의 곡선에서 사용 > x , y , startAngle, endAngle, clockwise 를 인자로 받음
            .lineTo(x + radius, -y)
            .absarc(x, -y, radius, 0, -Math.PI / 2, true)
            .lineTo(-x, -(y + radius))
            .absarc(-x, -y, radius, -Math.PI / 2, Math.PI, true)
            .lineTo(-(x + radius), y, radius, Math.PI / 2, true)
            .absarc(-x, y, radius, Math.PI, Math.PI / 2, true);

        // const geometry = new THREE.ShapeGeometry(shape);
        const options = {
            depth: 0.01, // 두께감
            bbevelThickness: 0.1, // 경계
        };
        const geometry = new THREE.ExtrudeGeometry(shape, options);
        const material = new THREE.MeshStandardMaterial({color: color, side: THREE.DoubleSide}); // 정면만 렌더링

        const mesh = new THREE.Mesh(geometry, material);

        this.mesh = mesh;
    }
}

export default Card;