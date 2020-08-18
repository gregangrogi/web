
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var cat = this.add.image(200.0, 200.0, "textures", "cat");
		cat.setScale(0.3, 0.3);
		
		var SPIKE = this.add.image(310.3599, 247.06416, "textures", "plat");
		SPIKE.setScale(0.1, 2.0);
		
		var SPIKE_1 = this.add.image(101.50649, 250.69438, "textures", "plat");
		SPIKE_1.setScale(0.1, 2.0);
		
		this.fCat = cat;
		this.fSPIKE = SPIKE;
		this.fSPIKE_1 = SPIKE_1;
		
	}
	
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.arrows = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fCat);
		this.physics.add.existing(this.fSPIKE);
		this.physics.add.existing(this.fSPIKE_1);
		
		this.physics.add.overlap(this.fCat, this.fSPIKE, this.hit, null, this);
		this.physics.add.overlap(this.fCat, this.fSPIKE_1, this.hit, null, this);
		
	}
	hit(){
		
		this.fCat.x = 200;
		this.fCat.y = 200;
		
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
