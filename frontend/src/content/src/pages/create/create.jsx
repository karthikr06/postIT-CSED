import './create.css'
import Gap from '../../gap.jsx'
import { useEffect } from 'react'

function createPage(){
    useEffect(() => {
            document.title = "Create"
        }, []);
    return(<>
        <Gap />
        {/* Create Page Content */}
        create
    </>
    )
}   

export default createPage