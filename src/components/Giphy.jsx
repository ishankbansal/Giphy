import React, {useEffect, useState} from 'react'
import axios from "axios"

const Giphy = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const gif = async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params : {
                    api_key: "zYwssAIPPjKXyDJT2B6bK9pyZYCHtfoO"
                }
            });
            
            console.log(results);
            setData(results.data.data);
        }
        gif();
    }, [])

    const renderGif = () => {
        return data.map(e => {
            return (
                <div key = {e.id} className="gif">
                    <img src={e.images.fixed_height.url}/>
                    <h2 className="title">{e.title}</h2>
                </div>
            )
        })
    }
    return (
        <div className="container gifs">
            {renderGif()}
        </div>
    )
}

export default Giphy
