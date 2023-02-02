import './WeaponSelected.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeaponSelected = () => {
  const uri = window.location.pathname.split('/').slice(2);
  const uuid = uri[0];

  const [skin, setSkin] = useState('standard');

  const [weapon, setWeapon] = useState([]);
  useEffect(() => {
    getWeaponId();
  }, [weapon]
  );

  const getWeaponId = async () => {
    try {
      const query = await axios.get(`https://valorant-api.com/v1/weapons/${uuid}?language=pt-BR`);
      if (query.status < 300) {
        setWeapon(query.data.data);
        //console.log(query.data.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id='weapon-id'>
      <div id='navbar-weapon-skins'>
        <h1>Skins</h1>
        <button onClick={(e) => (setSkin('standard'))} className="btn-skins"><p className="title-skin">Default</p></button>
        {
          weapon?.skins &&
          weapon.skins.map(
            (item, key) => (
              <div key={key}>
                {item.displayName != `Standard ${weapon.displayName}` && item.displayName != "Random Favorite Skin" ? <button key={key} onClick={(e) => (setSkin(item.displayName))} className='btn-skins'><p className='title-skin'>{item.displayName}</p></button> : <div></div>}
              </div>
            )
          )
        }
      </div>
      <div className='weapon-content'>
        {skin == 'standard' ?
          <h1>{weapon.displayName}</h1>
          :
          <h1>{weapon.displayName}: {skin}</h1>
        }
        {
          skin == 'standard' ?
            <img className='img-weapon' src={weapon.displayIcon} alt="" />
            :
            weapon?.skins &&
            weapon.skins.map(
              (item, key) => {
                if (skin == item.displayName)
                  return <img className='img-weapon' key={key} src={item.displayIcon} alt="" />

              }
            )
        }
        <div className='stats'>
          {weapon.weaponStats ?
            <h1>Stats</h1>
            :
            <h1></h1>
          }
          <p>Custo: {weapon.shopData?.cost}$</p>
          <p>Categoria: {weapon.shopData?.categoryText}</p>
          <p>Penetração de parede:
            {
              weapon.weaponStats?.wallPenetration.split('::').slice(1)[0] == "High" ? " Alto" : ""
            }
            {
              weapon.weaponStats?.wallPenetration.split('::').slice(1)[0] == "Medium" ? " Médio" : ""
            }
            {
              weapon.weaponStats?.wallPenetration.split('::').slice(1)[0] == "Low" ? " Baixo" : ""
            }

          </p>
          <p>Cadência: {weapon.weaponStats?.fireRate * 60}/min</p>
          <p>Munição: {weapon.weaponStats?.magazineSize}</p>
          <p>Multiplicador de velocidade de corrida: {weapon.weaponStats?.runSpeedMultiplier}</p>
          <p>Tempo até equipar: {weapon.weaponStats?.equipTimeSeconds}s</p>
          <p>Tempo de carregamento{weapon.weaponStats?.reloadTimeSeconds}</p>
          <p>Precisão do primeiro tiro: {weapon.weaponStats?.firstBulletAccuracy}</p>

          {
            weapon.weaponStats?.adsStats ?
              <h1>Aim Down Sights (ADS)</h1>
              :
              <h1></h1>
          }
          {
            weapon.weaponStats?.adsStats?.zoomMultiplier ?
              <p>Zoom: {weapon.weaponStats?.adsStats?.zoomMultiplier}</p>
              :
              <p></p>
          }
          {
            weapon.weaponStats?.adsStats?.fireRate ?
              <p>Cadência: {weapon.weaponStats?.adsStats?.fireRate * 60}/min</p>
              :
              <p></p>
          }
          {
            weapon.weaponStats?.adsStats?.runSpeedMultiplier ?
              <p>Multiplicador de velocidade de corrida: {weapon.weaponStats?.adsStats?.runSpeedMultiplier}</p>
              :
              <p></p>
          }
          {
            weapon.weaponStats?.adsStats?.firstBulletAccuracy ?
              <p>Precisão do primeiro tipo: {weapon.weaponStats?.adsStats?.firstBulletAccuracy}</p>
              :
              <p></p>
          }

          {
            weapon.weaponStats?.damageRanges ?
              <table>
                <caption>Damage range</caption>
                <thead>
                  <tr>
                    <th></th>
                    <th>Cabeça</th>
                    <th>Corpo</th>
                    <th>Pernas</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    weapon?.weaponStats &&
                    weapon.weaponStats.damageRanges.map(
                      (item, key) => (
                        <tr key={key}>
                          <th>{item.rangeStartMeters}M - {item.rangeEndMeters}M</th>
                          <td>{item.headDamage}</td>
                          <td>{item.bodyDamage}</td>
                          <td>{item.legDamage}</td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              </table>
              :
              <></>
          }
        </div>
      </div>
    </div>
  )
}

export default WeaponSelected;