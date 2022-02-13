import React, {useState, useEffect } from 'react';
import Item from "./Item";
import View from "./View";

const Pokemon = () => {
    const [pokemon,setPokemon] = useState([]);
    const [data,setData] = useState([]);

    //console.logで[data]を表示して確認
    console.log(data,"data");

    //useEffectでデータを取得
    useEffect(()=>{

        //pokemonapiからデータを取得する処理を記述
        const fetchData = async () =>{
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=151"
            );

            //json形式のデータにして扱えるように
            const data = await response.json();
            // console.log(data,"json data");
        
            //resultsに絞る
            const pokemonList = data.results;
            console.log(pokemonList,"results")
            
            //useStateの更新処理
            setPokemon(pokemonList);
        }
        //処理を実行する
        fetchData();

      },[]);
    
    const handleClick = async (num) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${num}/`
        ).then((res) => res.json());
    
    setData(response);
    };
    

    return (
        <div>
            <h1>Pokemon図鑑</h1>
            <div className='viewBox'>
                {pokemon.map((item, index) => (
                <View key={index} pokemonItem={index} handleClick={handleClick}/> 
                ))}
            </div>
            <Item
                id={data.id}
                height={data.height}
                pokemonNmae={data.name}
                weight={data.weight}
                // data.spritesが初期値は空になるため、 && でdata.spritesが「存在するとき」のみ 表示に変更
                front={data.sprites && data.sprites.front_default}
                back={data.sprites && data.sprites.back_default}
                shiny={data.sprites && data.sprites.front_shiny}
                shinyBack={data.sprites && data.sprites.back_shiny}
            />
        </div>
    )
}

export default Pokemon