import * as THREE from 'three'
import Player from './Player';

export default class OpenLevel extends THREE.Group {
    constructor() {
        super();

        this.player = undefined;
    }

    load(scene, camera) {
        this.player = new Player(100, 100);
        this.player.position.set(0, 0, 0);
        this.player.addCamera(camera);
        scene.add(this.player);
        return this;
    }
}