<div class="HomeBodyListPagination">
    <div class="HBLP_Inside"><a class="HBLP_Inside_Box" href="#"><i class="fas fa-chevron-left"></i></a><a class="HBLP_Inside_Box HBLP_Inside_Box_Active" href="#">
            <p>1</p>
        </a><a class="HBLP_Inside_Box" href="#">
            <p>2</p>
        </a><a class="HBLP_Inside_Box" href="#">
            <p>3</p>
        </a>
        <p class="HBLP_Inside_Box HBLP_Inside_BoxDots">...</p><a class="HBLP_Inside_Box" href="#">
            <p>8</p>
        </a><a class="HBLP_Inside_Box" href="#"><i class="fas fa-chevron-right"></i></a>
    </div>
</div>

<style>
.HomeBodyListPagination {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.HBLP_Inside {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
}

.HBLP_Inside_Box {
  transition: ease 0.4s;
  text-decoration: unset;
  color: unset;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(35,35,35,0);
  border-radius: 10px;
  height: 100%;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0);
  transform: scale(1);
  border: solid 1px rgba(255,255,255,0);
  color: rgba(255,255,255,0.1);
  font-weight: bold;
}

.HBLP_Inside_Box:hover {
  transition: ease 0.4s;
  text-decoration: unset;
  color: unset;
  background: linear-gradient(to top right, #232323, #262626, #232323);
  box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);
  transform: scale(1.01);
  border: solid 1px rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.85);
}

.HBLP_Inside_Box.HBLP_Inside_BoxDots:hover {
  border: unset;
  background: unset;
  box-shadow: unset;
  color: rgba(255,255,255,0.1);
}

.HBLP_Inside_Box.HBLP_Inside_BoxDots {
  border: unset;
  background: unset;
  box-shadow: unset;
}

.HBLP_Inside_Box.HBLP_Inside_Box_Active {
  transition: ease 0.4s;
  text-decoration: unset;
  color: unset;
  /*background: #262626;*/
  /*box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);*/
  transform: scale(1.01);
  border: solid 1px rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.75);
}
</style>
