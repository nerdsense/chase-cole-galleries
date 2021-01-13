import React from 'react';

import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'BEDROOM',
                imageUrl: 'https://www.goffenafurniture.com/current/img/category/bedroom.jpg',
                id: 1
            },
            {
                title: 'DINING ROOM',
                imageUrl: 'https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fmillennium%2Fcolor%2Fhillcott_395279889-bcgmldwzvyuk1thiebdribq.jpg?width=1024&height=768&scale=both&trim.threshold=50&trim.percentpadding=10',
                id: 2
            },
            {
                title: 'LIVING ROOM',
                imageUrl: 'https://c.zmags.com/assets/images/5bd87167dbec83772e3d89e9-optimized.jpeg',
                id: 3
            },
            {
                title: 'BOB TIMBERLAKE',
                imageUrl: 'https://www.theribboninmyjournal.com/wp-content/uploads/2014/11/BobTimberlake_1.jpg',
                id: 4,
                size: 'large'
            },
            {
                title: 'NEW ITEMS',
                imageUrl: 'http://britishcottageblog.com/wp-content/uploads/2016/08/IMG_0545-768x534.jpg',
                id: 5,
                size: 'large'
            }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;