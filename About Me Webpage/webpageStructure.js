class Webpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {page:'Home'};
    }
    handleMenuChange = (x) => {this.setState({page:x});}
    render(){
        if(this.state.page === 'Home'){
            return(<div>
                <MenuBar menuChange={this.handleMenuChange}/>
                <HomeMenu/>
            </div>);
        }
        else if(this.state.page === 'About'){
            return(<div>
                <MenuBar menuChange={this.handleMenuChange}/>
                <AboutMe/>
            </div>);
        }
        else if(this.state.page === 'Projects'){
            return(<div>
                <MenuBar menuChange={this.handleMenuChange}/>
                <Projects/>
            </div>);
        }
    }
}

class MenuBar extends React.Component{
    constructor(props){
        super(props);
    }

    toggle = (x) => {this.props.menuChange(x);}
    render(){
        return(
            <div>
                <nav class="navbar justify-content-center navbar-light navbar-expand-lg bg-body-tertiary bg-warning">

                    <button
                    data-mdb-collapse-init
                    class="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i class="fas fa-bars"></i>
                    </button>

                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link h3" aria-current="page" href="#Home" onClick={() => {this.toggle('Home')}}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link h3" href="#About" onClick={() => {this.toggle('About')}}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link h3" href="#Projects" onClick={() => {this.toggle('Projects')}}>Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Webpage />);