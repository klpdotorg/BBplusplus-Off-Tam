Game.preloader_AL_SORT1_G7 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_AL_SORT1_G7.prototype = {
        preload: function () {
                // this.load.video('AL-SORT1-G7_1', 'demoVideos/AL-SORT1-G7.mp4');   //* include demo video of game.
                this.load.image('skipArrow', 'assets/commonAssets/skipArrow.png');

                this.load.atlas('bulb', 'assets/commonAssets/bulb.png', null, AL_SORT1_G7_JSON.bulbBtnJson);

                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, AL_SORT1_G7_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, AL_SORT1_G7_JSON.speakerJson);
                this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, AL_SORT1_G7_JSON.starAnimJson);
                this.load.atlas('replay', 'assets/commonAssets/reply.png', null, AL_SORT1_G7_JSON.replyJson);

                this.load.image('navBar', 'assets/commonAssets/navBar.png');
                this.load.image('timebg', 'assets/commonAssets/timebg.png');
                 this.load.image('hand', 'assets/commonAssets/hand.png');

                this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, AL_SORT1_G7_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, AL_SORT1_G7_JSON.nextbtnJson);

                //game grade assets


                this.load.image('BG', 'assets/gradeAssets/AL-SORT1-G7/Bg.png');
                this.load.image('panel', 'assets/gradeAssets/AL-SORT1-G7/blue panle.png');
                

                this.load.image('greenBall', 'assets/gradeAssets/AL-SORT1-G7/green ball.png');
                this.load.image('pinkBall', 'assets/gradeAssets/AL-SORT1-G7/pink ball.png');
                this.load.image('orangeBall','assets/gradeAssets/AL-SORT1-G7/Orange ball.png');

                this.load.image('wheelG', 'assets/gradeAssets/AL-SORT1-G7/weel 1.png');
                this.load.image('wheelO', 'assets/gradeAssets/AL-SORT1-G7/weel 2.png');
                this.load.image('bombG', 'assets/gradeAssets/AL-SORT1-G7/weel 4.png');
                this.load.image('bombO', 'assets/gradeAssets/AL-SORT1-G7/weel 3.png');
                this.load.image('wick1', 'assets/gradeAssets/AL-SORT1-G7/object_1.png');
                this.load.image('wick2', 'assets/gradeAssets/AL-SORT1-G7/object_2.png');

                this.load.atlas('greenCanon','assets/gradeAssets/AL-SORT1-G7/cannon_green.png',null, AL_SORT1_G7_JSON.greenCanonJson);   
                this.load.atlas('yellowCanon', 'assets/gradeAssets/AL-SORT1-G7/cannon_yelow.png', null, AL_SORT1_G7_JSON.yellowCanonJson);

                this.load.atlas('greenBlast','assets/gradeAssets/AL-SORT1-G7/green blast.png',null, AL_SORT1_G7_JSON.greenBlastJson);   
                this.load.atlas('yellowBlast', 'assets/gradeAssets/AL-SORT1-G7/yellow blast.png', null, AL_SORT1_G7_JSON.yellowBlastJson);

                

             
                
                

           
        },

        create: function () {

                this.state.start('AL_SORT1_G7level1');
        },
}