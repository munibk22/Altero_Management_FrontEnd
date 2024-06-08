import React,{useEffect, useState,useContext} from 'react'
import CoinGecko from '../apis/CoinGecko'
import {WatchListContext} from './WatchListContext'
import Coin from './Coin'


const CoinList = () => {
    const [coins, setCoins]=useState([]);
    
    const {watchList}= useContext(WatchListContext);
    console.log(watchList);
        useEffect(()=>{
    const fetchData = async ()=>{
     const response = await CoinGecko.get("/coins/markets", {
            params: {
                vs_currency:"usd",
                ids:watchList.join(","),
    
            }
        })
        setCoins(response.data)
        console.log(response.data);
        }
    
    
        fetchData();
    
            },[]);
    
    
            const renderCoins=()=>{
    return <div className="flexwrap  justifybetween  " style={{maxWidth:'1200px', width:'55vw'}}
>
    
    {coins.map((coin) =>{
    return <Coin key={coin.id} coin={coin} />
        }
    )}
        </div>
                }
            
    
        return (
            <div>
    
                {renderCoins()}
            </div>
        )
    }
    
    export default CoinList
    