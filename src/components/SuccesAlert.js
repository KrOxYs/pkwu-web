const SuccessAlertComp = ({message,messageInfo,}) => {
    return (

            <div id="alert-additional-content-3" className="p-4 mb-4 border border-green-300 rounded-lg bg-green-50 dark:bg-green-200 w-50 " role="alert">
  <div className="flex items-center" >
    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium text-green-700 dark:text-green-800">{message}</h3>
  </div>
  <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
   {messageInfo}
  </div>
</div>
    )
}

export default SuccessAlertComp