document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("navID").innerHTML =
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-darker">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                &#9875; Commission Form
            </a>
                
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100">
                    <li class="nav-item col active d-flex align-items-center justify-content-center">
                        <a class="nav-link" href="gallery.html">
                            <i class="fas fa-palette"></i>
                            Gallery
                        </a>
                    </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100">
                    <li class="nav-item col active d-flex align-items-center justify-content-center">
                        <a class="nav-link" href="discounts.html">
                            <i class="fas fa-chart-line"></i>
                            Discounts
                        </a>
                    </li>
                </ul>
            </div>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100">
                    <li class="nav-item col active d-flex align-items-center justify-content-center">
                        <a class="nav-link" href="tos.html">
                            <i class="fas fa-scroll"></i>
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100">
                    <li class="nav-item col active d-flex align-items-center justify-content-center">
                        <a class="nav-link" href="calculator.html">
                            <i class="fas fa-calculator"></i>
                            Xiran's Calculator
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    `
    document.getElementById("navID").classList.add("nav-sticky");
});