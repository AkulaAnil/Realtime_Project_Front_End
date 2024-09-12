import { useSelector } from 'react-redux';
import { PacmanLoader } from 'react-spinners'

const Loading = () => {

    const laoding = useSelector(state => state.globalState.loading);

    return (
        <>
            {laoding && <div className="sweet_loading">
                <div className="loadin_center">
                    <PacmanLoader
                        color="#7a9b80"
                        size={30}
                    />
                </div>
            </div>}
        </>
    );
}

export default Loading;