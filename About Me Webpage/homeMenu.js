class HomeMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
        <div class="container-fluid">

            <div class="row m-3">
                <div class="col-3"></div>
                <div class="col-6 text-center title">
                    <h1>
                        David's Virtual Portfolio
                    </h1>
                </div>
                <div class="col-3"></div>
            </div>

            <div class="row m-3">
                <div class="col m-4">
                    <img src="profile.jpg" width="350" height="350" class="imgStuff"></img>
                </div>
                <div class="col m-5 bg-info">
                    <h3 class="text-dark">
                        Welcome to this simple webpage highlighting me. Feel free to look around.
                        <br></br><br></br>
                        Learn more about me in the About section.
                        <br></br><br></br>
                        Explore projects I have worked on in the projects section.
                    </h3>
                </div>
            </div>

        </div>
       );
    }
}

class AboutMe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
        <div class="container-fluid">

            <div class="row m-4">
                <div class="col m-4">
                    <img src="bonsai.jpg" width="300" height="400" class="imgStuff"></img>
                </div>
                <div class="col m-3 bg-info">
                    <h5 class="text-dark">
                        Hi there, my name is David Middour. 
                        I am a Senior at UMBC studying for a degree in Computer Science: Data Science.
                        I have a great interest in computers, how they work, and what I can make using my skills.
                        I have worked on several projects, both for school and personal ones, that I am proud of.
                        Be sure to explore them in the projects section.
                        <br></br><br></br>
                        Other interests and extracuricular activities:
                        <br></br>
                        I am the president of Bonsai Club and I enjoy nature a lot.
                        I love listening to music. Rock and pop are my favorite, but I like all kinds.
                        <br></br>
                        I like video games. I even mod some every now and then for more fun.
                        <br></br><br></br>
                        Where you can find me:
                        <br></br>
                        Email: david.middour22@gmail.com
                        <br></br>
                        Github: TBD
                    </h5>
                </div>
            </div>

        </div>
       );
    }
}

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {tab:"overview"}
    }

    changeTab = (x) => {
        var show = document.getElementById(x);
        var hide = document.getElementById(this.state.tab);
        var newActive = document.getElementById(x + "-tab");
        var oldActive = document.getElementById(this.state.tab + "-tab");
        var oldimg = document.getElementById(this.state.tab + "-img");
        var newimg = document.getElementById(x + "-img");
        this.state.tab = x;
        oldActive.classList.remove('active');
        newActive.classList.add('active');
        hide.classList.remove('show');
        hide.classList.remove('active');
        show.classList.add('show');
        show.classList.add('active');
        oldimg.classList.remove('active');
        oldimg.classList.remove('show');
        newimg.classList.add('active');
        newimg.classList.add('show');
    }

    render(){
       return(
        <div class="container-fluid">

            <div class="row m-4">
                <div class="col-3">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="overview-tab" data-toggle="list" href="#Projects-overview" role="tab" aria-controls="home" onClick={() => {this.changeTab("overview")}}>Overview</a>
                    <a class="list-group-item list-group-item-action" id="smart-hub-tab" data-toggle="list" href="#Projects-smart-hub" role="tab" aria-controls="profile" onClick={() => {this.changeTab("smart-hub")}}>Smart-Hub</a>
                    <a class="list-group-item list-group-item-action" id="spteam-tab" data-toggle="list" href="#Projects-spteam" role="tab" aria-controls="messages" onClick={() => {this.changeTab("spteam")}}>SPteam</a>
                    <a class="list-group-item list-group-item-action" id="cat-thing-tab" data-toggle="list" href="#Projects-cat-thing" role="tab" aria-controls="settings" onClick={() => {this.changeTab("cat-thing")}}>Cat thing</a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active bg-info" id="overview" role="tabpanel" aria-labelledby="list-home-list">
                        <h4>
                        Welcome to the projects page. 
                        Here I will give an overview of different projects I have worked on.
                        </h4>
                    </div>
                    <div class="tab-pane fade bg-info" id="smart-hub" role="tabpanel" aria-labelledby="list-profile-list">
                        <h4>
                            The Smart-Home-Hub was a group project for my CMSC 437 Graphics User Interface course.
                            The project was to create a graphics user interface for a home system that could control
                            various settings like home temperature, fridge temperature, garden irrigation and more.
                            <br></br><br></br>
                            The project utilized HTML, CSS and JavaScript. 
                            Using the React framework in JavaScript and bootstrap, 
                            we were able to add lots of functionality and make the user interafce well designed.
                        </h4>
                    </div>
                    <div class="tab-pane fade bg-info" id="spteam" role="tabpanel" aria-labelledby="list-messages-list">
                        <h4>
                            SPteam was my first big group coding project at UMBC in my COMP 101Y course during my first semester.
                            In this introductory course to programming and computer science. 
                            In the course, we used a Java based tool called Processing which focused on visual elements, like being able to draw to the screen.
                            In the semester group project, me and my groupmates made a pac-man like game where the user could collect powerups and play through 15 levels of increasing difficulty.
                        </h4>
                    </div>
                    <div class="tab-pane fade bg-info" id="cat-thing" role="tabpanel" aria-labelledby="list-settings-list">
                        <h4>
                            Cat Thing is a personal project of mine where I am trying to create a desktop pet that simply exists on the desktop as you work or do whatever.
                            It uses a simple ai to make random choices about its movement, and then moves across the screen accordingly.
                        </h4>
                    </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="overview-img" role="tabpanel" aria-labelledby="list-profile-list">
                            <img src="cat-coding.png" width="400" height="400"></img>
                        </div>
                        <div class="tab-pane fade" id="smart-hub-img" role="tabpanel" aria-labelledby="list-profile-list">
                            <img src="Smart-Home-Hub.jpg" width="450" height="300"></img>
                        </div>
                        <div class="tab-pane fade" id="spteam-img" role="tabpanel" aria-labelledby="list-profile-list">
                            <img src="spteam.jpg" width="450" height="300"></img>
                        </div>
                        <div class="tab-pane fade" id="cat-thing-img" role="tabpanel" aria-labelledby="list-profile-list">
                            <img src="cat-thing.jpg" width="450" height="300"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       );
    }
}