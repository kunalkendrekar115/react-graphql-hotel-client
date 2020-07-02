import React from "react"
import { Button } from "@material-ui/core"

const WriteReviewButtons = ({ loading, onCancel }) => {
  return (
    <div
      style={{
        width: "inherit",
        display: "flex",
        justifyContent: "center",
        marginTop: 20
      }}
    >
      <Button
        style={{ marginRight: 20 }}
        variant="contained"
        color="secondary"
        onClick={onCancel}
      >
        Reset
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {!loading ? " Submit" : "Adding Review ..."}
      </Button>
    </div>
  )
}

export default WriteReviewButtons
