import MainNavigation from "./components/MainNavigation";

function ErrorPage(){
   
return (
      <>
      <MainNavigation/>
      <main>
          <h1>
             An error accured
          </h1>
          <p>Cloud not find a your destination!</p>
      </main>   
      </> 
);
}
export default ErrorPage;