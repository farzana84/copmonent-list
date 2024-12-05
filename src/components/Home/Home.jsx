import {Outlet} from "react-router-dom"
import Header from '../Header/Header'
import Footer from '../footer/footer'
import List from '../List/list'
const Home = () => {
    return(
        <div style= {{maxWidth:"400px",display:"grid",placeSelf:"center",backgroundColor:"#d3d3d3"}}>
            <Header></Header>
            <div style={{height:"500px"}}>
            <List></List>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Home;