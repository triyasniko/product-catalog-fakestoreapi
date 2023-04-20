import axiosClient from "../axiosClient";
export function getCloting(){
    axiosClient.get(``)
        .then(({data})=>{
            commit('set')
        });
};