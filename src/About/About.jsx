// import { Card } from "flowbite-react/lib/esm/components"
// import ProfileCard from "./ProfileCard"
import Profile from '../profile.json'
import './About.css'
const About = () => {
    return (
        <div className="main-about w-auto mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#ffffff" 
          fillOpacity={1} d="M0,160L12.6,170.7C25.3,181,51,203,76,192C101.1,181,126,139,152,149.3C176.8,160,202,224,227,256C252.6,288,278,288,303,250.7C328.4,213,354,139,379,128C404.2,117,429,171,455,192C480,213,505,203,531,213.3C555.8,224,581,256,606,256C631.6,256,657,224,682,202.7C707.4,181,733,171,758,149.3C783.2,128,808,96,834,74.7C858.9,53,884,43,909,69.3C934.7,96,960,160,985,176C1010.5,192,1036,160,1061,165.3C1086.3,171,1112,213,1137,245.3C1162.1,277,1187,299,1213,261.3C1237.9,224,1263,128,1288,80C1313.7,32,1339,32,1364,48C1389.5,64,1415,96,1427,112L1440,128L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path></svg> 
          
          <div className="kel-title mb-3">
            <h1 className="mt-5 text-2xl mb-3">Anggota Kelompok</h1>
          </div>
            <div className="main-section w-auto mx-3 mt-3">
             {Profile && Profile.map(profile => {
              return (
                <div className="w-full max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-5 mb-5" key={profile.id}>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg mt-3" src={profile.imgURL} alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{profile.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{profile.role}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href={profile.insta}><ion-icon size="large" name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
                </div>
              )
             })}
            </div>
        </div>
    )
}
export default About