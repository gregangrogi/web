
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var cat = this.add.image(312.0, 226.0, "textures", "cat");
		cat.setScale(0.3, 0.3);
		
		var SPIKE = this.add.image(809.36914, 228.2566, "textures", "SPIKE");
		SPIKE.setScale(0.3, 0.3);
		
		this.fCat = cat;
		this.fSPIKE = SPIKE;
		
	}
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.arrows = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fCat)
		
	}

	update() {
		if (this.arrows.right.isDown){
			this.fCat.x += 2;
		}
		else if (this.arrows.left.isDown){
			this.fCat.x -= 2;
		}
		if (this.arrows.down.isDown){
			this.fCat.y += 2;
		}
		else if (this.arrows.up.isDown){
			this.fCat.y -= 2;
		}
		
	}
		

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
