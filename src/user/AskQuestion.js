import React from 'react'

const AskQuestion = () => {
  return (
    <div>
      <h4 className='pt-4'>This is Ask Question Page..</h4>
      <div classNameName="container">
        <form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Write Your Question</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label>Add Tags Here</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-warning">Ask Question</button>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion