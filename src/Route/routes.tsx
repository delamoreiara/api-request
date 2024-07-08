import React from "react";
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import GetDataList from "../pages/pageGetPost/getData";
import PostNewData from "../pages/pagePostNewData/postNewData";
import DeleteData from "../pages/pageDeletePost/deleteData";
import RouteName from "./routeName";
import GetIdPost from "../pages/pageGetPost/getIdData";
import UpdateDataPage from "../pages/pageUpdateData/updateData";


const RoutesPage: React.FC = () =>(  
    <BrowserRouter>
        <Routes>
            <Route path={RouteName.ROOT} element={<GetDataList/>} />
            <Route path={RouteName.POST} element={<PostNewData/>} />
            <Route path={RouteName.DELETE} element={<DeleteData/>} />
            <Route path={RouteName.GETID} element={<GetIdPost/>} />
            <Route path={RouteName.UPDATE} element={<UpdateDataPage/>} />
        </Routes>
    </BrowserRouter>
)
export default RoutesPage