import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabBtn = isActive ? 'active-tab-btn' : ''
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <button
      type="button"
      className={`tab-btn ${activeTabBtn}`}
      onClick={onClickTabItem}
    >
      <li className="tab-item-container ">{displayText}</li>
    </button>
  )
}

export default TabItem
