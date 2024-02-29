<div class="HBLA_Inside_BodyTags"><a class="HBLA_Inside_BodyTagsTag">Tag 1</a><a class="HBLA_Inside_BodyTagsTag">Tag 2</a><a class="HBLA_Inside_BodyTagsTag">Tag 3</a></div>

<style>
.HBLA_Inside_BodyTags {
  margin: 35px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  grid-gap: 10px;
  flex-wrap: wrap;
}

.HBLA_Inside_BodyTagsTag {
  transition: ease 0.4s;
  padding: 5px 15px;
  border-radius: 10px;
  background: rgba(255,255,255,0);
  color: rgba(255,255,255,0.25);
  text-decoration: unset;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0);
  border: solid 1px rgba(255,255,255,0.05);
}

.HBLA_Inside_BodyTagsTag:hover {
  transition: ease 0.4s;
  transform: scale(1.02);
  color: rgba(255,255,255,0.5);
  box-shadow: 0 0 8px 0 rgb(0,0,0,0.1);
  background: rgba(255,255,255,0.05);
}

.HBLA_Inside_BodyTagsTag:active {
  transition: ease 0.1s;
  transform: scale(0.98);
}
</style>
