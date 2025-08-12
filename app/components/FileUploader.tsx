

import React, {useCallback, useState} from 'react'
// import {useDropzone} from 'react-dropzone'

// interface FileUploaderProps {
//     onFileSelect?: (file: File | null) => void;
// }   

function FileUploader() {
    const [file, setFile] = useState()
    

  

  return (
    <div className='w-full gradient-border'>
      
     

           
                <div className='uploader-selected-file' >

                                            <img src="/icons/info.svg" alt="upload" className="size-20"/>

                <p className="text-lg text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
               <div className="flex flex-col items-center space-x-3">
                <img src="/images/pdf.png" alt="pdf" className='size-10' />
                                            <p className="text-lg text-gray-500">PDF (max 20 MB)</p>


                <div>

               
                </div>

               </div>
               
                </div>
         
                <div>
                    

          
    </div>
    </div>
  )
}

export default FileUploader