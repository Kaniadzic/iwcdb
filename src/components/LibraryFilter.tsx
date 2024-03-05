export const LibraryFilter = () => {
  return (
    <div className="flex column container-filters">
      {/* Resource Cost & Purity filters */}
      <div className="flex">
        <div className="flex column category-filter">
          <p>Resource Cost</p>
          <div className="flex box-filter">
            <span className="flex filter-control">
              <p>0</p>
            </span>
            <span className="flex filter-control">
              <p>1</p>
            </span>
            <span className="flex filter-control">
              <p>2</p>
            </span>
            <span className="flex filter-control">
              <p>3</p>
            </span>
            <span className="flex filter-control">
              <p>4</p>
            </span>
            <span className="flex filter-control">
              <p>5</p>
            </span>
            <span className="flex filter-control">
              <p>6</p>
            </span>
            <span className="flex filter-control">
              <p>7</p>
            </span>
            <span className="flex filter-control">
              <p>8</p>
            </span>
            <span className="flex filter-control">
              <p>9+</p>
            </span>
          </div>
        </div>

        <div className="flex box-filter"></div>
      </div>
      {/* Attack & Health filters */}
      <div className="flex">
      <div className="flex column category-filter">
          <p>Attack</p>
          <div className="flex box-filter">
            <span className="flex filter-control">
              <p>0</p>
            </span>
            <span className="flex filter-control">
              <p>1</p>
            </span>
            <span className="flex filter-control">
              <p>2</p>
            </span>
            <span className="flex filter-control">
              <p>3</p>
            </span>
            <span className="flex filter-control">
              <p>4</p>
            </span>
            <span className="flex filter-control">
              <p>5</p>
            </span>
            <span className="flex filter-control">
              <p>6</p>
            </span>
            <span className="flex filter-control">
              <p>7</p>
            </span>
            <span className="flex filter-control">
              <p>8</p>
            </span>
            <span className="flex filter-control">
              <p>9+</p>
            </span>
          </div>
        </div>


        <div className="flex column category-filter">
          <p>Health</p>
          <div className="flex box-filter">
            <span className="flex filter-control">
              <p>0</p>
            </span>
            <span className="flex filter-control">
              <p>1</p>
            </span>
            <span className="flex filter-control">
              <p>2</p>
            </span>
            <span className="flex filter-control">
              <p>3</p>
            </span>
            <span className="flex filter-control">
              <p>4</p>
            </span>
            <span className="flex filter-control">
              <p>5</p>
            </span>
            <span className="flex filter-control">
              <p>6</p>
            </span>
            <span className="flex filter-control">
              <p>7</p>
            </span>
            <span className="flex filter-control">
              <p>8</p>
            </span>
            <span className="flex filter-control">
              <p>9+</p>
            </span>
          </div>
        </div>
      </div>
      {/* SuperType & Morale Cost filters */}
      <div className="flex">
        <div className="flex box-filter"></div>
        <div className="flex box-filter"></div>
      </div>
      {/* Rarity, Type & Set filters */}
      <div className="flex"></div>

      <button className="button-main">Apply Filter</button>
    </div>
  );
};
