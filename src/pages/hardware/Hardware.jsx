import './hardware.css'

export default function Hardware() {
  return (
    <div className='container'>
      <div className="hardware">
        <div className="row">
          <div className="col-md-12">
            <div class="card">
              <div class="card-header text-center">
                <h2 className='text-success'>Computer Hardware Devices</h2>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item mycard-list">
                  <div>
                    <h3>Motherboard</h3>
                    <div className="card-image"><img src='images/Motherboard.webp' alt='card-image' /></div>
                    <p>
                      The motherboard is the piece of computer hardware that can be thought of as the "backbone" 
                      of the PC, or more appropriately as the "mother" that holds all the pieces together
                    </p>
                    <button className='btn btn-outline-success'>Read More</button>
                  </div>
                </li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
