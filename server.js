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
const rejectFollowRoute = require('./routes/rejectFollow')
const getFollowersFollowingRoute = require('./routes/getFollowersFollowing')
const unfollowRoute = require('./routes/unfollow')
const fetchtrendingRoute = require('./routes/fetchTrending')    
const unrequestedRoute = require('./routes/unrequested')
const giveTrendOpinionListRoute = require('./routes/giveTrendOpinionList')
const getUserDetailsRoute = require('./routes/getUserDetails')
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
        origin: "http://localhost:3000",
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
app.use("/rejectFollow", rejectFollowRoute);
app.use("/unfollow", unfollowRoute);
app.use("/fetchtrending", fetchtrendingRoute);
app.use("/getFollowersFollowing/", getFollowersFollowingRoute);
app.use("/unrequested", unrequestedRoute);
app.use("/giveTrendOpinionList", giveTrendOpinionListRoute)
app.use("/getUserDetails",getUserDetailsRoute)
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

const serverS=app.listen(PORT,console.log(`server is listening on port ${PORT}`));
try{
let io=require('socket.io')(serverS);
io.on('connection', (socket)=>{
    console.log(socket+" connected");

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