import React from 'react'
import { Link } from 'dva/router'
import './style.less'

const SongRanking = ({ tracks }) => {
  return (
    <div className="">
      {
      tracks.map((item, ind) => {
        return (
        <p className="line-ellipsis" key={ item.second }>{ `${ind+1}.${item.first} - ${item.second}` }</p>
        )
      })
    }
    </div>
  )
}

const Official = ({ toplist }) => {
  return (
    <div className="padding top-list-wrap">
      {
        toplist && toplist.map(item => {
          const { list } = item
          return (
            <div key={item.id} className={`top-list-wrap-item ${item.vertical && 'vertical-row'}`}>
              <h5>{item.title}</h5>
              {
                list && list.map(I => {
                  const { tracks } = I
                  return (
                    <Link key={I.id} to={
                      {
                        pathname: `/home/topListDetail/${I.id}`,
                      }
                    }>
                      <dl>
                        <dt>
                          <img src={I.coverImgUrl} alt=""/>
                        </dt>
                        <dd>
                          { !item.vertical && tracks && tracks.length && <SongRanking tracks={ tracks }/> }
                          { item.vertical && <p className="text-ellipsis">{ I.name }</p> }
                        </dd>
                      </dl>
                    </Link>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Official
