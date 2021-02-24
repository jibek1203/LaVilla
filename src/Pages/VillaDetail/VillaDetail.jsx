import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { villasContext } from '../../contexts/VillaContext';
import './VillaDetail.css';
import {useTransition, animated} from 'react-spring'
import SlideBox from '../../components/MainBox/Slider';

const VillaDetail = () => {
  const { villas, villaDetail, forDetail } = useContext(villasContext);  //, getVillaDetail

  const { id } = useParams();

  useEffect(() => {
    villaDetail(id)
  }, [id])
  // useEffect(() => {
  // 	getVillaDetail(); //here maybe id inside parenthesies
  // }, [])

  // console.log(villaDetail)
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, null, {
  from: { position: 'absolute', opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  })

  return (
    <>
      {
        forDetail ?
        <>
              <h1>{forDetail.title}</h1>
            <div className="det-container">
              <div>
            <SlideBox images={forDetail} />
              </div>
            <div style={{marginTop: '600px'}}>
              <p>{forDetail.description}</p>
            </div>
            </div>
          </>
            




            : transitions.map(({ item, key, props }) => 
              item
            ? <animated.div style={props} key={key}>😄Loading</animated.div>
            : <animated.div style={props} key={key}>🤪</animated.div>
            )
      }
  </>
  );
};

export default VillaDetail;