class HomeMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
        <div class="container-fluid">

            <div class="row m-5">
                <div class="col m-5"></div>
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
                <div class="col m-4"></div>
                <div class="col m-4 bg-info">
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
                        Github:
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
        this.state.tab = x;
        oldActive.classList.remove('active');
        newActive.classList.add('active');
        hide.classList.remove('show');
        hide.classList.remove('active');
        show.classList.add('show');
        show.classList.add('active');
    }

    render(){
       return(
        <div class="container-fluid">

            <div class="row m-4">
                <div class="col-3 m-4">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="overview-tab" data-toggle="list" href="#list-home" role="tab" aria-controls="home" onClick={() => {this.changeTab("overview")}}>Overview</a>
                    <a class="list-group-item list-group-item-action" id="smart-hub-tab" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile" onClick={() => {this.changeTab("smart-hub")}}>Smart-Hub</a>
                    <a class="list-group-item list-group-item-action" id="spteam-tab" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages" onClick={() => {this.changeTab("spteam")}}>SPteam</a>
                    <a class="list-group-item list-group-item-action" id="cat-thing-tab" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings" onClick={() => {this.changeTab("cat-thing")}}>Cat thing</a>
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="col-6 m-4">
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active bg-info" id="overview" role="tabpanel" aria-labelledby="list-home-list">
                        <h5>
                        Welcome to the projects page. 
                        Here I will give an overview of different projects I have worked on.
                        </h5>
                    </div>
                    <div class="tab-pane fade bg-info" id="smart-hub" role="tabpanel" aria-labelledby="list-profile-list">
                        <h5>
                            The Smart-Home-Hub was a group project for my CMSC 437 Graphics User Interface course.
                            The project was to create a graphics user interface for a home system that could control
                            various settings like home temperature, fridge temperature, garden irrigation and more.
                            <br></br><br></br>
                            The project utilized HTML, CSS and JavaScript. 
                            Using the React module in JavaScript and bootstrap, 
                            we were able to add lots of functionality and make the user interafce well designed.
                        </h5>
                    </div>
                    <div class="tab-pane fade bg-info" id="spteam" role="tabpanel" aria-labelledby="list-messages-list">
                        <h5>
                            SPteam was my first big group coding project at UMBC in my COMP 101Y course during my first semester.
                            In this introductory course to programming and computer science. 
                            In the course, we used a Java based tool called Processing which focused on visual elements, like being able to draw to the screen.
                            In the semester group project, me and my groupmates made a pac-man like game where the user could collect powerups and play through 15 levels of increasing difficulty.
                        </h5>
                    </div>
                    <div class="tab-pane fade bg-info" id="cat-thing" role="tabpanel" aria-labelledby="list-settings-list">
                        <h5>
                            Cat Thing is a personal project of mine where I am trying to create a desktop pet that simply exists on the desktop as you work or do whatever.
                            It uses a simple ai to make random choices about its movement, and then moves across the screen accordingly.
                        </h5>
                    </div>
                    </div>
                </div>
            </div>

        </div>
       );
    }
}