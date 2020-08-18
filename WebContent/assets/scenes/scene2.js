
// You can write more code here

/* START OF COMPILED CODE */

class scene2 extends Phaser.Scene {
	
	constructor() {
	
		super("scene2");
		
	}
	
	create() {
	
		var SPIKE_5 = this.add.image(957.14197, 297.92645, "textures", "plat");
		SPIKE_5.setScale(0.1, 2.1);
		
		var SPIKE_4 = this.add.image(1141.9414, 399.24582, "textures", "plat");
		SPIKE_4.setScale(0.1, 3.0);
		
		var SPIKE_3 = this.add.image(656.0977, 676.3838, "textures", "plat");
		SPIKE_3.setScale(1.7, 0.3);
		
		var SPIKE_2 = this.add.image(689.85455, 489.00085, "textures", "plat");
		SPIKE_2.setScale(1.0, 0.3);
		
		var SPIKE_1 = this.add.image(168.26314, 395.60504, "textures", "plat");
		SPIKE_1.setScale(0.1, 3.0);
		
		var SPIKE = this.add.image(361.9135, 316.38892, "textures", "plat");
		SPIKE.setScale(0.1, 2.1);
		
		var cat = this.add.image(263.21732, 294.251, "textures", "cat");
		cat.setScale(0.3, 0.3);
		
		this.fSPIKE_5 = SPIKE_5;
		this.fSPIKE_4 = SPIKE_4;
		this.fSPIKE_3 = SPIKE_3;
		this.fSPIKE_2 = SPIKE_2;
		this.fSPIKE_1 = SPIKE_1;
		this.fSPIKE = SPIKE;
		this.fCat = cat;
		
	}
	
	
	
	
	
	
	
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
