CC = gcc
CFLAGS = -Wall -Wextra -std=c11
BUILD_DIR = build
TARGET = binary_tree
OBJS = $(BUILD_DIR)/$(TARGET).o
DEPS = $(OBJS:.o=.d)

.PHONY: all clean

all: build run

build: $(BUILD_DIR)/$(TARGET)

$(BUILD_DIR)/$(TARGET): $(BUILD_DIR)/$(TARGET).o
	$(CC) $(CFLAGS) $^ -o $@

$(BUILD_DIR)/$(TARGET).o: $(TARGET).c
	@mkdir -p $(@D)
	$(CC) $(CFLAGS) -MMD -MP -c $< -o $@

-include $(DEPS)

run: $(BUILD_DIR)/$(TARGET)
	./$(BUILD_DIR)/$(TARGET)

clean:
	$(RM) $(BUILD_DIR)/*.o $(BUILD_DIR)/*.d $(BUILD_DIR)/$(TARGET)
