import { useAuthContext } from '../../contexts/AuthContext'
import '../Profile/Profile.scss'
import Card from '../../components/Card/Card';

const Profile = () => {
    const { user } = useAuthContext();
    return (
        <div className='Profile'>
            <br />
            <div className='container'>
                <div className='row'>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='row'>
                            <div>
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile