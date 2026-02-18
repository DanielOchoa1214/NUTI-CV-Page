import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TabNavigation.module.css';

/**
 * TabNavigation component provides accessible tab navigation
 * Supports mouse clicks and keyboard navigation (Tab, Enter, Arrow keys)
 * Requirements: 1.1, 1.6, 7.1, 7.2, 9.3, 9.4, 9.5
 */
function TabNavigation({ activeTab, onTabChange, tabs }) {
  const tabRefs = useRef([]);

  useEffect(() => {
    // Initialize refs array
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs.length]);

  const handleKeyDown = (event, tabId, index) => {
    let targetIndex = index;

    switch (event.key) {
      case 'ArrowLeft':
        // Navigate to previous tab
        event.preventDefault();
        targetIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        // Navigate to next tab
        event.preventDefault();
        targetIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        // Navigate to first tab
        event.preventDefault();
        targetIndex = 0;
        break;
      case 'End':
        // Navigate to last tab
        event.preventDefault();
        targetIndex = tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        // Activate the focused tab
        event.preventDefault();
        onTabChange(tabId);
        return;
      default:
        return;
    }

    // Focus the target tab
    if (tabRefs.current[targetIndex]) {
      tabRefs.current[targetIndex].focus();
    }
  };

  const handleClick = (tabId) => {
    onTabChange(tabId);
  };

  return (
    <nav role="tablist" aria-label="Resume sections" className={styles.tabNavigation}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${tab.id}-panel`}
            id={`${tab.id}-tab`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id, index)}
            className={`${styles['tab-button']} ${isActive ? styles.active : ''}`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

TabNavigation.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TabNavigation;
