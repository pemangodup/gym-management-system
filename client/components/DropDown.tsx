import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Shape of a single option
interface DropdownItem {
  label: string;
  value: string;
}

// Define the Props for the Componenet
interface CustomeDropdownProps {
  label: string;
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomeDropdownProps> = ({
  label,
  data,
  onSelect,
  placeholder,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const toggleDropdown = () => setVisible(!visible);

  const onItemPress = (item: DropdownItem): void => {
    setSelectedItem(item);
    onSelect(item);
    setVisible(false);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.buttonText}>
        {selectedItem ? selectedItem.label : placeholder}
      </Text>
    </View>
  );
};

// ... (Your Component Code Above)

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    height: 55,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
  arrow: {
    fontSize: 12,
    color: "#666",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  dropdownContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    maxHeight: "40%",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});
