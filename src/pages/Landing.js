import React from 'react'
import '../css/Landing.css'
import Landing1 from '../components/Landing1'
import Landing2 from '../components/Landing2'
import Landing3 from '../components/Landing3'
import Landing4 from '../components/Landing4'

class Landing extends React.Component {
    render() {
        return (
            <div className="landing-grid">
                <Landing1 />
                <Landing2 />
                <Landing3 />
                <Landing4 />
            </div>
        )
    }
}
export default Landing
