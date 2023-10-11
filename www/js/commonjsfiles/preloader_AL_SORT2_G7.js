Game.preloader_AL_SORT2_G7=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_AL_SORT2_G7.prototype={
	preload:function(){
       // this.load.video('ALSUBG7','demoVideos/AL-SORT2-G7.mp4');   //* include demo video of game.
        this.load.image('skipArrow','assets/commonAssets/skipArrow.png'); 
        this.load.atlas('bulb','assets/commonAssets/bulb.png',null,AL_SORT2_G7_JSON.bulbBtnJson);
        
	this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,AL_SORT2_G7_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,AL_SORT2_G7_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,AL_SORT2_G7_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,AL_SORT2_G7_JSON.replyJson);        
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('hand','assets/commonAssets/hand.png');

        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, AL_SORT2_G7_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, AL_SORT2_G7_JSON.nextbtnJson);     
        this.load.image('BG1', 'assets/gradeAssets/AL-SORT2-G7/Bg.png');

       // this.load.image('hand', 'assets/commonAssets/hand.png');

        ////
        this.load.image('backet_1', 'assets/gradeAssets/AL-SORT2-G7/backet_1.png');
        this.load.image('backet_2', 'assets/gradeAssets/AL-SORT2-G7/backet_2.png');
        this.load.image('backet_3', 'assets/gradeAssets/AL-SORT2-G7/backet_3.png');
        this.load.image('muskMelon1', 'assets/gradeAssets/AL-SORT2-G7/fruits_1.png');
        this.load.image('banana', 'assets/gradeAssets/AL-SORT2-G7/fruits_2.png');
        this.load.image('waterMelon', 'assets/gradeAssets/AL-SORT2-G7/fruits_3.png');
        this.load.image('muskMelon2', 'assets/gradeAssets/AL-SORT2-G7/fruits_4.png');
        this.load.image('panel', 'assets/gradeAssets/AL-SORT2-G7/panle_1.png');
        this.load.image('plank', 'assets/gradeAssets/AL-SORT2-G7/box.png');
        },

	create:function(){
		
		this.state.start('AL_SORT2_G7level1');   
    },
}