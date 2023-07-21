import './software.css'

export default function Software() {
  return (
    <div className='container'>
      <div className="software">
        <h3>Systems Software</h3><hr/>
        <div className="row">        
          <div className="col-md-4">
            <div className="soft-card">
              <i class="bi bi-windows software-icon text-primary"></i>
              <h4>Windows</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="soft-card">
              <i class="bi bi-ubuntu software-icon text-danger"></i>
              <h4>Linux</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="soft-card">
              <i class="bi bi-apple software-icon"></i>
              <h4>Mac</h4>
            </div>
          </div>        
        </div>
        <br/><br/><br/>
        <h3>Application Software</h3><hr/>
        <div className="row">        
          <div className="col-md-4">
            <div className="soft-card">
            <i class="bi bi-file-word-fill software-icon"></i>
              <h4>MS Office</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="soft-card">
              <i class="bi bi-virus software-icon text-info"></i>
              <h4>Antivirus</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="soft-card">
              <i class="bi bi-film software-icon text-primary"></i>
              <h4>Media Players</h4>
            </div>
          </div>        
        </div>
        
      </div>
    </div>
  )
}
