import React from 'react'


const New = ({key,notice}) => {
    return (
        <div className="d-flex align-items-center pb-9">
            <div className="symbol symbol-70 symbol-2by3 flex-shrink-0 mr-6">
                        <div className="symbol-label" style={{height:'70px',width:'105px', backgroundImage: `url(${notice.imageurl})`, backgroundSize:'cover'}}></div>
            </div>
            <div className="d-flex flex-column flex-grow-1">
                <a href={notice.url} className="news-title text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1">{notice.title}</a>
            <span className="text-muted">{notice.source_info.name }</span>

            </div>
        </div>
    )
}

export default New
