function LastUpdate({ timestamp }) {
  return (
    <p className="text-sm text-gray-400">
      Last Updated: {new Date(timestamp).toLocaleString()}
    </p>
  );
}

export default LastUpdate;