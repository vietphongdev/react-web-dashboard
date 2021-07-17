import React, { useRef } from "react";
import { useClickOutsideRef } from "../../hooks/useClickOutside";
import "./dropdown.css";

const Dropdown = ({
  icon,
  badge,
  customToggle,
  contentData,
  renderItems,
  renderFooter,
}) => {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);
  useClickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {icon ? <i className={icon}></i> : null}
        {badge ? <span className="dropdown__toggle-badge">{badge}</span> : null}
        {customToggle ? customToggle() : null}
      </button>

      <div ref={dropdown_content_el} className="dropdown__content">
        {contentData && renderItems
          ? contentData.map((item, index) => renderItems(item, index))
          : null}
        {renderFooter ? (
          <div className="dropdown__footer">{renderFooter()}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
