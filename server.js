const express = require('express');
const passport = require('passport');
const cors = require('cors');
const authRoute = require('./routes/auth');
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
const PORT = 3001;
app.listen(PORT,console.log(`server is listening on port ${PORT}`));
