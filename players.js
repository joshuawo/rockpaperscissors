var players = [
  {
    name: "Bob",
    user_selected:false,
    opp_selected:false,
    picture: "images/bob.png",
    name_pic: "bob_name.png",
    char_id:0,
    opp_id:0,
    win:["http://media.giphy.com/media/11B3HiwxBWxIpa/giphy.gif","http://www.allgeektome.net/wp-content/uploads/2014/11/www.pinterest.com_.gif","https://yahoo201027.files.wordpress.com/2015/02/tumblr_njisnjpkyr1r8hpiao4_500.gif"],
    loss:["https://38.media.tumblr.com/20d023cf52c8fb7963790a3d11607a25/tumblr_inline_npwzwdB2ti1qgr77p_500.gif","http://31.media.tumblr.com/ba317fbf7b35f07b09ab339efe44cddc/tumblr_n3n8uiJkWQ1txae4yo4_500.gif","http://30.media.tumblr.com/tumblr_m1u0tpx8RQ1qgy5vio1_500.gif"],
    tie:["http://mrwgifs.com/wp-content/uploads/2014/04/Gene-Tina-Louise-Cannot-Unsee-The-Horrors-Of-The-Internet-On-Bobs-Burgers.gif","http://25.media.tumblr.com/tumblr_m6b5iz5vsB1qhy1vwo1_500.gif","http://3.bp.blogspot.com/-BzpWCk8DyE8/VDH10cWA7sI/AAAAAAAACkY/ljV0_YndZFk/s1600/tumblr_nczz2v7v7o1r31inoo4_250.gif"]
  },
  {
    name: "Linda",
    user_selected:false,
    opp_selected:false,
    picture: "images/linda.png",
    name_pic: "linda_name.png",
    char_id:0,
    opp_id:0,
    win:["http://33.media.tumblr.com/45d00ed2af936abb947009f5d35d1963/tumblr_mzomf6AK571qdn10zo1_r1_500.gif","http://ak-hdl.buzzfed.com/static/2013-10/enhanced/webdr05/14/10/anigif_enhanced-buzz-21277-1381762565-3.gif","http://37.media.tumblr.com/47411e38e6365d18c76ea555126425f0/tumblr_n57w70BRUT1ttpk7to1_500.gif"],
    loss:["http://24.media.tumblr.com/tumblr_mb781bdzRY1rnw80to1_r1_500.gif","http://www.four.co.nz/Portals/0/Content/Shows/BobsBurgers/Linda/tumblr_mco3cmUyFI1rxhuq8o1_500.gif","http://38.media.tumblr.com/tumblr_lh7xnoLfVV1qz7a4co1_400.gif"],
    tie:["http://mrwgifs.com/wp-content/uploads/2014/04/Gene-Tina-Louise-Cannot-Unsee-The-Horrors-Of-The-Internet-On-Bobs-Burgers.gif","http://25.media.tumblr.com/tumblr_m6b5iz5vsB1qhy1vwo1_500.gif","http://3.bp.blogspot.com/-BzpWCk8DyE8/VDH10cWA7sI/AAAAAAAACkY/ljV0_YndZFk/s1600/tumblr_nczz2v7v7o1r31inoo4_250.gif"]
  },
  {
    name: "Tina",
    user_selected:false,
    opp_selected:false,
    picture: "images/tina.png",
    name_pic: "tina_name.png",
    char_id:0,
    opp_id:0,
    win:["http://ak-hdl.buzzfed.com/static/enhanced/webdr05/2013/9/3/18/anigif_enhanced-buzz-23567-1378249038-4.gif","http://ak-hdl.buzzfed.com/static/enhanced/webdr06/2013/9/5/9/anigif_enhanced-buzz-3935-1378387048-27.gif","http://media2.onsugar.com/files/2013/09/30/828/n/3019466/68f6262abfe22f75_tumblr_msm391DxEu1qf7e9fo3_500.gif"],
    loss:["http://ak-hdl.buzzfed.com/static/enhanced/webdr06/2013/8/30/13/enhanced-buzz-22187-1377885179-12.jpg","http://ak-hdl.buzzfed.com/static/enhanced/webdr02/2013/7/26/20/anigif_enhanced-buzz-22572-1374883923-4.gif","http://ak-hdl.buzzfed.com/static/enhanced/webdr06/2013/9/5/9/anigif_original-grid-image-3994-1378387235-12.gif"],
    tie:["http://mrwgifs.com/wp-content/uploads/2014/04/Gene-Tina-Louise-Cannot-Unsee-The-Horrors-Of-The-Internet-On-Bobs-Burgers.gif","http://25.media.tumblr.com/tumblr_m6b5iz5vsB1qhy1vwo1_500.gif","http://3.bp.blogspot.com/-BzpWCk8DyE8/VDH10cWA7sI/AAAAAAAACkY/ljV0_YndZFk/s1600/tumblr_nczz2v7v7o1r31inoo4_250.gif"]
  },
  {
    name: "Louise",
    user_selected:false,
    opp_selected:false,
    picture: "images/louise.png",
    name_pic: "louise_name.png",
    char_id:0,
    opp_id:0,
    win:["http://ak-hdl.buzzfed.com/static/enhanced/webdr03/2013/8/30/12/anigif_enhanced-buzz-22172-1377879223-23.gif","http://33.media.tumblr.com/8bc2351584653e697d150a2647f24869/tumblr_nk4myierOs1u10srao1_500.gif","http://24.media.tumblr.com/7bfe3ce8b4703c5b8d055350ff1fa1f8/tumblr_n3zvju90Hj1qz4yoao1_500.gif"],
    loss:["http://ak-hdl.buzzfed.com/static/enhanced/webdr02/2013/7/26/20/enhanced-buzz-24239-1374885160-10.jpg","https://s-media-cache-ak0.pinimg.com/originals/51/26/31/5126311186b9e6dedda4cef2324ef5ef.jpg","http://ak-hdl.buzzfed.com/static/2014-03/enhanced/webdr03/21/22/anigif_enhanced-3145-1395455125-16.gif"],
    tie:["http://mrwgifs.com/wp-content/uploads/2014/04/Gene-Tina-Louise-Cannot-Unsee-The-Horrors-Of-The-Internet-On-Bobs-Burgers.gif","http://25.media.tumblr.com/tumblr_m6b5iz5vsB1qhy1vwo1_500.gif","http://3.bp.blogspot.com/-BzpWCk8DyE8/VDH10cWA7sI/AAAAAAAACkY/ljV0_YndZFk/s1600/tumblr_nczz2v7v7o1r31inoo4_250.gif"]
  },
  {
    name: "Gene",
    user_selected:false,
    opp_selected:false,
    picture: "images/gene.png",
    name_pic: "gene_name.png",
    char_id:0,
    opp_id:0,
    win:["https://secure.static.tumblr.com/a168cfaa0f8cff83f9c25a15547b09d9/hhhygbj/ScMnbk1v1/tumblr_static_9r7nfx3oa884s0go8kggk4goo_640_v2.gif","http://images6.fanpop.com/image/photos/36000000/Bob-s-Burgers-image-bobs-burgers-36089270-500-200.gif","http://38.media.tumblr.com/tumblr_liuee1C0mz1qhmoflo1_500.gif"],
    loss:["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVIZ_8NOf4NnmpzLVfrBivq3JFIiT0WVE7Unyj9o2GcpElzl0lmpurIvk","http://cdn.playbuzz.com/cdn/7e999884-add0-4b51-bacb-8e7fae26250a/771d9870-338a-4031-82d7-048b09f33b29.gif","http://38.media.tumblr.com/1040ff07e7e3ff1b07427e42d9127b25/tumblr_nhvr1sYxjW1rpj3gjo1_400.gif"],
    tie:["http://mrwgifs.com/wp-content/uploads/2014/04/Gene-Tina-Louise-Cannot-Unsee-The-Horrors-Of-The-Internet-On-Bobs-Burgers.gif","http://25.media.tumblr.com/tumblr_m6b5iz5vsB1qhy1vwo1_500.gif","http://3.bp.blogspot.com/-BzpWCk8DyE8/VDH10cWA7sI/AAAAAAAACkY/ljV0_YndZFk/s1600/tumblr_nczz2v7v7o1r31inoo4_250.gif"]

  }
]
