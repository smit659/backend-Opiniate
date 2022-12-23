require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const authRoute = require('./routes/auth');
const opinions =require("./models/Opinions");
const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');
const userOpinionsRoute = require('./routes/userOpinions');
const giveOpinionListRoute = require('./routes/giveOpinionList');
const incomingRoute = require('./routes/incoming');
const getIncomingRequestRoute = require('./routes/getIncomingRequest')
const acceptFollowRoute = require('./routes/acceptFollow')
const publicFollowRoute = require('./routes/publicFollow')
const rejectFollowRoute = require('./routes/rejectFollow')
const getFollowersFollowingRoute = require('./routes/getFollowersFollowing')
const unfollowRoute = require('./routes/unfollow')
const editBioRoute = require('./routes/editBio')
const fetchtrendingRoute = require('./routes/fetchTrending')    
const unrequestedRoute = require('./routes/unrequested')
const giveTrendOpinionListRoute = require('./routes/giveTrendOpinionList')
const getUserDetailsRoute = require('./routes/getUserDetails')
const postCommentRoute    =  require('./routes/postComment')
const getCommentRoute = require('./routes/getComment')
const likeRoute = require('./routes/like')
const getRecommendationRoute=require('./routes/getRecommendation')
const getSugesstionRoute = require('./routes/getSugesstion')
const dislikeRoute = require('./routes/dislike')
const getMyOpinionsRoute = require('./routes/getMyOpinions')
const getMyLikedOpinionRoute = require('./routes/getMyLikedOpinion')
require('./passport');
//require('dotenv').config();
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession(
    {
        name: "sessionn",
        keys: ["jayS"],
        maxAge: 24*60*60*100
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors(
    {
        origin: "*",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    }
));

app.get('/', function(req, res) {res.send('oj')})
app.use("/auth", authRoute);
app.use("/signup", signupRoute);
app.use("/signin", signinRoute);
app.use("/userOpinions",userOpinionsRoute);
app.use("/giveOpinionList",giveOpinionListRoute);
app.use("/incoming",incomingRoute);
app.use("/getIncomingRequest/",getIncomingRequestRoute);
app.use("/acceptFollow", acceptFollowRoute);
app.use("/publicFollow", publicFollowRoute);
app.use("/rejectFollow", rejectFollowRoute);
app.use("/unfollow", unfollowRoute);
app.use("/fetchtrending", fetchtrendingRoute);
app.use("/getFollowersFollowing/", getFollowersFollowingRoute);
app.use("/unrequested", unrequestedRoute);
app.use("/giveTrendOpinionList", giveTrendOpinionListRoute)
app.use("/getUserDetails",getUserDetailsRoute)
app.use("/editBio",editBioRoute);
app.use("/postComment",postCommentRoute);
app.use("/getComment",getCommentRoute);
app.use("/like",likeRoute);
app.use("/dislike",dislikeRoute);
app.use("/getSuggestions",getSugesstionRoute);
app.use("/getMyOpinions",getMyOpinionsRoute);
app.use("/getMyLikedOpinion",getMyLikedOpinionRoute);
app.use("/getRecommendation", getRecommendationRoute)
const PORT = 3001;


function sortByProperty(property){  
    return function(a,b){  
       if(a[property] < b[property])  
          return 1;  
       else if(a[property] > b[property])  
          return -1;  
   
       return 0;  
    }  
 }
const port=3001
const serverS=app.listen(process.env.PORT,console.log(`server is listening on port ${PORT}`));
try{
let io=require('socket.io')(serverS);
io.on('connection', (socket)=>{
    console.log(socket+" connected");

    socket.on('requested',(datas)=>{
        console.log(datas.author)
        socket.broadcast.emit(datas.author,{'change':datas})
    });

    socket.on("I sent",(Data)=>{
        console.log(Data);
      
            opinions.find((err, result)=>{
               
                if(err)
                console.log(err);
            
                else
               {
                result.sort(sortByProperty("date"));
                socket.broadcast.emit('every one rerender',{mes:result});
               }
            });
            
       
    });
   
    

    });
}
catch(e){console.log(e);}