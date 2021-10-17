import React from 'react';

class CatList extends React.Component {

    listCats = () => {
        console.log(this.props.catPics)
        return this.props.catPics.map(pic => {
            return <img key={pic.id} src={pic.url} alt={pic.id}/>
        })
    }

  render() {
    return (
      <div>
          okay
          {this.listCats()}
      </div>
    )
  }
}

export default CatList;