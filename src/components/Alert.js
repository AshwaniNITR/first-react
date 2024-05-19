import React from "react";

export default function Alert(props) {
    function capitalize(word){
       var newWword= word.toLowerCase();
       return newWword.charAt(0).toUpperCase() + newWword.slice(1);
    }
  return (
    props.alert && <div>
       <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
      {capitalize(props.alert.msg)} 
      </div>
    </div>
  );
}
